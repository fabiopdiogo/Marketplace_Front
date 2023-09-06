export interface Purchase{
  _id:  Number,
  _id_buyer: Number,
  _id_product: Number,
  name_buyer: String,
  name_product: String,
  image_path: String,
  price: Number,
  quantity : String,
  totalPrice: Number,
  datePurchased:String,
  status:String
}