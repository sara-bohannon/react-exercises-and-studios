import React from 'react';
import recipe from './recipe.json';
import './styling.css';

export default function AuthorInfo() {
  const { author, authorImage, website } = recipe[0];

  return (
    <div className="authorInfo">

      <img src={authorImage} alt={author} className="authorImage" />

      <p>{author}</p>

      <a href={website} target="_blank" rel="noopener noreferrer">
        {website}
      </a>
    </div>
  );
}
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 