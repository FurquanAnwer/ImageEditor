import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { Polar } from "@polar-sh/sdk";
import { env } from "@/src/env";
import { checkout, polar, portal, webhooks } from "@polar-sh/better-auth";
import { db } from "@/src/server/db";

const polarClient = new Polar({
  accessToken: env.POLAR_ACCESS_TOKEN,
  server: "sandbox",
});


const prisma = new PrismaClient();
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: [
            {
              productId: "c8097bdb-b2b3-4514-a6df-07648feb4c00",
              slug: "small",
            },
            {
              productId: "8ffca84a-beba-45ec-895d-43aaa54801b4",
              slug: "medium",
            },
            {
              productId: "6b01c54b-eeb4-4bc2-a273-154d32072a1a",
              slug: "large",
            },
          ],
          successUrl: "/dashboard",
          authenticatedUsersOnly: true,
        }),
        portal(),
        webhooks({
          secret: env.POLAR_WEBHOOK_SECRET,
          onOrderPaid: async (order) => {
            const externalCustomerId = order.data.customer.externalId;

            if (!externalCustomerId) {
              console.error("No external customer ID found.");
              throw new Error("No external customer id found.");
            }

            const productId = order.data.productId;

            let creditsToAdd = 0;

            switch (productId) {
              case "c8097bdb-b2b3-4514-a6df-07648feb4c00":
                creditsToAdd = 50;
                break;
              case "8ffca84a-beba-45ec-895d-43aaa54801b4":
                creditsToAdd = 200;
                break;
              case "6b01c54b-eeb4-4bc2-a273-154d32072a1a":
                creditsToAdd = 400;
                break;
            }

            await db.user.update({
              where: { id: externalCustomerId },
              data: {
                credits: {
                  increment: creditsToAdd,
                },
              },
            });
          },
        }),
      ],
    }),
  ],
});