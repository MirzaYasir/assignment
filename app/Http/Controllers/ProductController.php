<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        return view('products/index');
    }

    public function update(){
        $res = Product::where('id',request()->id)->update(['title' => request()->title, 'price' => request()->price, 'description' => request()->description]);
        if($res){
            return json_encode(array("result" => "success", "message" => "Product updated successfully!"));   
        } else {
            return json_encode(array("result" => "error", "message" => "Product not updated successfully!"));
        }
    }

    public function softDelete(){
        $res = Product::where('id',request()->id)->delete();
        return $res;
    }

    public function list(){
        $products = Product::all()->toArray();
        return json_encode($products);
    }

    public function save(){
        $product = new Product();
        $product->title = request()->title;
        $product->price = request()->price;
        $product->description = request()->description;
        $product->save();
        return json_encode(array("result" => "success", "message" => "Product saved successfully!"));
    }
}
