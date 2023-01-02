const mongoose = require("mongoose");
const NoticiaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    require: true,
  },
  conteudo: {
    type: String,
    require: true
  },
  categoriaID: {
    type: String,
    require: false
  }
});

module.exports = mongoose.model("Noticia", NoticiaSchema);