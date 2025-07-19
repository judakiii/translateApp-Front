import { z } from "zod";

export const WORDSCHEMA = z
  .string()
  .min(2, "Minimum 2 characters required")
  .max(15, "Maximum 15 characters allowed")
  .regex(/^[a-zA-Z]+$/, "Only English letters are allowed");

export const WORDSCHEMA_FA = z
  .string()
  .regex(/^[\u0600-\u06FF\s]*$/, "Only Persian letters are allowed")
  .refine((val) => val === "" || val.length >= 3, {
    message: "Minimum 3 characters required",
  })
  .default("");

export const WORDSCHEMA_CH = z
  .string()
  .regex(
    /^[\p{Script=Latin}\p{Script=Han}äöüÄÖÜß]*$/u,
    "Only en/ch/de letters are allowed"
  )
  .refine((val) => val === "" || val.length >= 1, {
    message: "Minimum 1 characters required",
  })
  .default("");

export const WORDSCHEMA_DE = z
  .string()
  .regex(
    /^[\p{Script=Latin}\p{Script=Han}äöüÄÖÜß]*$/u,
    "Only en/ch/de letters are allowed"
  )
  .refine((val) => val === "" || val.length >= 3, {
    message: "Minimum 3 characters required",
  })
  .default("");
