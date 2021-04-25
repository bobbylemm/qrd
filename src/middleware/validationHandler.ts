import { Request, Response, NextFunction} from 'express'
import { Schema } from 'joi'

const validationHandler = (schema: Schema) => { 
  return (req: Request, res: Response, next: NextFunction) => {
    const options = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true
  };
  const { error } = schema.validate(req.body, options); 
  const valid = error == null; 

  if (valid) { 
    next(); 
  } else { 
      const { details } = error; 
      const message = details.map((i: any) => i.message).join(',');

      console.log("error", message); 
      res.status(422).json({ error: message }) } 
  } 
} 

export default validationHandler