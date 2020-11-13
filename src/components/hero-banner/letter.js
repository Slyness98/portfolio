class Letter{
    constructor(className, letter) {
      this.node = document.createElement("SPAN");
      this.node.class = this.node.setAttribute("class", className);
      this.node.innerHTML = letter;
  
      if(!letter || typeof letter !== "string"|| letter === (undefined || null)) {
          this.node.innerHTML = " ";
      }
    }
}

export default Letter;