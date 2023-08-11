const RecipeAuthor = () => {
   let authorLink = "Kevin Hammel";
   let authorPhoto = "Batman.jpeg";
   let authorName = "Kevin Hammel";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["2   12-ounce packages low-fat baked breaded chicken-breast tenderloins or cutlets",
   "1  teaspoon dried oregano",
   "1 1/2 cups jarred marinara sauce",
   "4  tablespoons freshly grated Parmesan",
   "Freshly ground black pepper"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>"Chicken Parmesan"</h1>
            <p>"This easy chicken parmesan recipe calls for just 5 ingredients, including black pepper, and 20 minutes from prep to table."</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2005%2F02%2F21%2Fchicken-parmesan-rs-1031603-4x3-1-2000.jpg"
        alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}