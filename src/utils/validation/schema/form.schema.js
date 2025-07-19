import { z } from "zod";
import {
  WORDSCHEMA,
  WORDSCHEMA_CH,
  WORDSCHEMA_DE,
  WORDSCHEMA_FA,
} from "../dto";

export const FORM_SCHEMA = z.object({
  wordValue: WORDSCHEMA,
  faValue: WORDSCHEMA_FA.optional(),
  chValue: WORDSCHEMA_CH.optional(),
  deValue: WORDSCHEMA_DE.optional(),
});
