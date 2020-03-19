/*
*  @Method This method generates random text of 128 digits of base 16.
*  @Return {string}
*  @Example eca4440be0c47145acedb7c455b79b56443951cb02accd3bca9abec7e0a1a765aee950aa527d0cddb9036b5a97b21c39bb05838c59d67495be9c2b09aa11c8ad
*/
function generateUUID(): string {
  return 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 15 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(15);
  });
}

export default generateUUID;