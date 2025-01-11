import React from "react";

const AddProduct= ()=>{


    return(

        <>
        <div className="bg-slate-500 p-5">

            <div className="bg-gray-200 p-5 w-fit place-self-center rounded-3xl">
                <h1 className="lg:text-5xl lg:font-normal text-3xl font-extrabold text-center">ADD PRODUCT</h1>
                <form action="" className="flex flex-col gap-3">
<table className="w-auto border-collapse">
<tr className="border-b-2 border-b-gray-300 ">
       <td className="p-4"> <label>Name:</label></td>
          <td className="p-4">  <input className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none px-4 py-1" type="text" name="name" /></td>
    
</tr>
<tr className="border-b-2 border-b-gray-300">
       <td className="p-4"> <label>Description:</label></td>
       <td className="p-4"> <textarea name="desc" className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"></textarea></td>

</tr>
<tr className="border-b-2 border-b-gray-300">
       <td className="p-4"> <label>Brand:</label></td>
       <td className="p-4">     <input className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2" type="text" name="brand" /></td>

</tr>
<tr className="border-b-2 border-b-gray-300">
        <td className="p-4"><label>Price:</label></td>
        <td className="p-4">    <input className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2" type="number" name="price" min="0"/></td>

</tr>
<tr className="border-b-2 border-b-gray-300">
        <td className="p-4"><label>Category:</label></td>
        
        <td className="p-4"><select name="category" className="border-teal-700 border-2 bg-transparent w-full outline-none p-2">
            <option value="Electronics">Electronics</option>
            <option value="Electronics">Stationory</option>
            <option value="Electronics">Home Appliances</option>
            <option value="Electronics">Toys</option>
        </select></td>

</tr>
<tr className="border-b-2 border-b-gray-300">
        <td className="p-4"><label>Quantity:</label></td>
        <td className="p-4">    <input className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2" type="number" /></td>

</tr>

<tr className="border-b-2 border-b-gray-300">
        <td className="p-4"><label>Release Date:</label></td>
        <td className="p-4">    <input className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2" type="date" /></td>

</tr>


</table>
                </form>

            </div>

        </div>
        
        </>
    );
}

export default AddProduct;