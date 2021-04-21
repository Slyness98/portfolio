const nameRegex = /^[\p{L}\p{M}'\- ]*[\p{L}\p{M}'-]*$/iu;
const emailRegex = /^((?!@)([\p{L}\p{M}\p{N}\w!#$%&'*"+ -]+(\.[\p{L}\p{M}\p{N}\w!#$%&'*"+ -]+)*)@[\p{L}\p{M}\p{N}\w!#$%&'*"+ -]+(\.[\p{L}\p{M}\p{N}\w!#$%&'*"+ -]+)*|\.([0-9]{1,3})|(\p{L}\p{M}{2,3}))$/u;
//^ capture everything before mandatory @, using negative look ahead to make sure name part doesn't include an @ since no email is allowed to rock the double @s. Check for mandatory @. Move on to actual domain part of address. Use same fairly universal checks as we did before mandatory @, looking for at least 2 character top-level domains but also looking for 3 character domains; all that plus support for ip addresses attached to domain handle. The main caveat is this regex doesn't distinguish between spaces inside and outside of quotation marks. Emails allow for spaces if quoted, but not if outside of quotes. This regex won't make that distinction, but back-end validation will
const companyRegex = /^[\p{L}\p{M}\p{N} ]*[\p{L}\p{M}\p{N}]*$/iu;

const Data = [
  {
    fieldName: "firstName",
    type: "text",
    uiValidationRegex: nameRegex,
    placeholder: "Your First Name",
    spreadProps: {required: true, autoFocus: true}
  },
  {
    fieldName: "lastName",
    type: "text",
    uiValidationRegex: nameRegex,
    placeholder: "Your Last Name",
    spreadProps: {required: true}
  },
  {
    fieldName: "email",
    type: "email",
    uiValidationRegex: emailRegex,
    placeholder: "E-mail",
    spreadProps: {required: true}
  },
  {
    fieldName: "companyName",
    type: "text",
    uiValidationRegex: companyRegex,
    placeholder: "Company name (optional)",
    spreadProps: {}
  }
];

export default Data;