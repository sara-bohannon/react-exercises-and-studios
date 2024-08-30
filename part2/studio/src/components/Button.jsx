import React from 'react';
import SaveButton from './SaveButton';
import ClickedButton from './ClickedButton';

export default function Button(props) {
  const { saveButton } = props;
  return saveButton ? <SaveButton /> : <ClickedButton />;
}

 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 