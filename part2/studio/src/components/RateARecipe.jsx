let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  function GiveRating() {
    const { rating } = props;
    if (rating < 1 || rating > 5) {
      return null;
    }
    return <h3>{stars[rating - 1]}</h3>;
  }

  return <GiveRating />;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
