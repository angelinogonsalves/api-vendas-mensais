import mongoose from "mongoose";

const VendasMensalSchema = new mongoose.Schema(
  {
    ano: {
      type: Number,
      required: true
    },
    mes: {
      type: String,
      required: true
    },
    vendas: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("VendasMensal", VendasMensalSchema);
