import { ValidationArguments,ValidatorConstraint,ValidatorConstraintInterface,ValidationOptions,registerDecorator, contains } from "class-validator";

//Custom Validator Class(logic)
@ValidatorConstraint({name:'Gender'})
export class GenderConstranint implements ValidatorConstraintInterface{
    validate(gender: any, args: ValidationArguments): boolean {
        const allowedgender = ['male','female'];
        if(gender === null ){
            return false;
        }else{
            return typeof gender === 'string' && allowedgender.includes(gender);
        }
    }
    defaultMessage(args: ValidationArguments) {
    //error message if validation failed
     return `Gender male or female` ;
  }
}

//Custom validation decorator(function)
export function Gender(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: GenderConstranint,
    });
  };
}