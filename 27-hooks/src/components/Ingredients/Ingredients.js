import React, { useState, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {

  const [ingredients, setIngredients] = useState([]);

/*   useEffect(() => {
    fetch('https://tutorials-96254.firebaseio.com/ingredients.json')
      .then(response => response.json())
      .then(responseData => {
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount
          })
        }
        setIngredients(loadedIngredients);
      });
  }, []) */

  useEffect(() => {
    console.log('Rereding...', ingredients);
  }, [ingredients]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setIngredients(filteredIngredients);
  }, []);

  const addIngredientHandler = (ingredient) => {
    fetch('https://tutorials-96254.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => setIngredients(prev => [...prev, { id: data.name, ...ingredient }]));
  };

  const removeIngredientHandler = (id) => {
    /*     fetch('https://tutorials-96254.firebaseio.com/ingredients.json', {
          method: 'DELETE',
          body: JSON.stringify({ name: id }),
          headers: { 'Content-Type': 'application/json' }
        })
          .then(response => {
            setIngredients(prev => prev.filter(ingredient => ingredient.id !== id))
          }); */
    setIngredients(prev => prev.filter(ingredient => ingredient.id !== id))
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={ingredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
