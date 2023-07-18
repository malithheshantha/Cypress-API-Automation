export class todo{

navigate(){
    cy.visit("http://todomvc-app-for-testing.surge.sh/");
}

firstTodo(){
    cy.get(".new-todo").type("sample TODO {enter}");
}


}