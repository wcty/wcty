import { useState, useEffect } from 'react';
import { MobileStepper } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { FormProps } from './types';
import ImageInput from './Inputs/Image'
import SelectInput from './Inputs/Select'
import NoteInput from './Inputs/Note';
import NumberInput from './Inputs/Number';
import TextInput from './Inputs/Text';
import s from './styles.module.scss'

export default ({ formGetter, nextButton, backButton, variant, floating, finished, setFinished }:FormProps)=> {
  const formSteps = formGetter()
  const maxSteps = formSteps.length
  const [ activeStep, setActiveStep ] = useState(0);
  const [ formData, setFormData ] = useState<{[prop:string]:any}>({})
  const [ formID ] = useState(uuidv4())
  const [ valid, setValid ] = useState(false)

  useEffect(()=>{
    //Validator for the form fields
    let bool = true
    if(Object.keys(formData).length > 0){
      formSteps[activeStep].forEach((d,i)=>{
        if(d.type==='image'){
          if( !(formData[d.id]) ) bool = false
        }else if(d.type==='number'){
          if( !(formData[d.id] && formData[d.id].length>0 && !isNaN(formData[d.id])) ) bool = false
        }else if(d.type!=='note'){
          if( !(formData[d.id] && formData[d.id].length>0) ) bool = false
        }
      })
      setValid(bool)
    }
  },  [activeStep, formData])


  return <form className={s.root} noValidate autoComplete="off">
      {
        formSteps[activeStep].map(( input, i )=>{
          switch (input.type){
            case 'elements':
              return input.elements
            case 'text':
              return <TextInput{...{formData, setFormData, input, classes:s}}/>
            case 'number':
              return <NumberInput {...{formData, setFormData, input, classes:s}}/>
            case 'note':
              return <NoteInput {...{input, classes: s}}/>
            case 'select':
              return <SelectInput {...{formData, setFormData, input}} />
            case 'image':
              return <ImageInput {...{setFormData, input, initiativeID: formID}} />
            default:
              return null;
          }
        })
      }    

      <MobileStepper
        style={{ position: floating? 'relative': 'absolute' }}
        steps={ maxSteps }
        position="static"
        variant={ variant || undefined }
        activeStep={ activeStep }
        className={ s.MobileStepper }
        nextButton={ nextButton && nextButton({ activeStep, setActiveStep, maxSteps, valid, formData }) }
        backButton={ backButton && backButton({ activeStep, setActiveStep, maxSteps, valid, formData }) }
      />
    </form>
}
