//Monthly income
let totalFunds = 0;

class Menu {
    constructor(bill = new Bills()){ //used to easily acess the bills class
        this.bill = bill;
        //this.totalFunds = totalFunds;
    }
    // get income first before getting to the main menu
    start(){
        //totalFundsResult is here to change the prompt return into a number with parInt
        let totalFundsResult = prompt(`What is your monthly income`);
        totalFunds = parseInt(totalFundsResult) 
        this.options();
    }
 
    //directory for the mainMenu prompt    
    options(){
        let response = this.mainMenu();
    while (response != 0) {
        switch (response) {
            case '1': this.billAdder();
            break;
            case '2': this.bill.viewBills();
            break;
            case '3': this.bill.deleteBills();
            break;
            case '4': this.bill.totalAmount();
            break;
            case '5': this.bill.incomeChanger();
            break;
            default: 0;
                    
            }
        
            response = this.mainMenu();
        }
        alert('Bye!')
    } 
    
    mainMenu(){
        return prompt(`
            1. Add monthly bills 
            2. View bills
            3. Delete bill
            4. Budget
            5. Change income amount
            `);
    }
    // result of each prompt gets pushed the the name and amount arrays for bills
    billAdder(){
        let result1 = prompt(`What is the name for this bill.`);
        let result2 = prompt('Bill amount');
        this.bill.billsName.push(result1);
        this.bill.billsAmount.push(Number(result2)); //Number is to change string to number

        }

}


class Bills{
    constructor() {
        this.billsName = [];
        this.billsAmount = [];
      this.billsTotal = 0; 
    } //for loop to list out all the bills
    viewBills() {
        let billString = ''
        console.log(('view bills'), totalFunds)
        for (let i = 0; i < this.billsName.length; i++) {
            billString += i + '. Name: '  + this.billsName[i] + '     |     ' + ' Amount: $' + this.billsAmount[i] + '\n' + '----------------------------' + '\n';

        }
        //adds your budget total budget and total income
        alert(billString + '\n' + 'Budget total: $' + this.total() + '\n' + 'Total income is: $' + totalFunds);
    }
    //Function that adds the bill amount together
    total() {
        this.billsTotal = 0
        for (let i = 0; i < this.billsAmount.length; i++){
            this.billsTotal += this.billsAmount[i];
        }
       return this.billsTotal
    }
    deleteBills() {
        let billString = ''
        
        for (let i = 0; i < this.billsName.length; i++) {
            billString += i + '. Name: '  + this.billsName[i] + '     |     ' + ' Amount: ' + this.billsAmount[i] + '\n' + '----------------------------' + '\n';

        }
    let deleteChoice = prompt('Choose which number to delete \n' + billString)
        if (deleteChoice <= this.billsName.length && deleteChoice >= 0) { // test to make sure number is a correct amount using the length of the array. If not send error
            this.billsName.splice(deleteChoice, 1)
            this.billsAmount.splice(deleteChoice, 1)
        } else {
            alert('Invalid Choice! Please select an existing number!')
        }

    } 
    // Provideds how much money your over or under
    totalAmount() {
        let total = totalFunds - this.total() 
            if (total < 0){
                alert(`
                You messed up! You're $${total} over your budget.
                Go back and remove some things.`)
            } else {
                alert(`You have $${total} go buy yourself something nice, you earned it!`)
            }
    }

    incomeChanger() {
        //each prompt response is put in a variable first then use parInt on a new variable to change string to number
        let result = prompt('1. subtract or 2. add');
        let resultnum0 = parseInt(result);
            if (resultnum0 == 1) {
                let result2 = parseInt(prompt('How much?'));
                let resultNum = parseInt(result2);
                totalFunds -= resultNum;
          } else if (resultnum0 == 2) {
                let result2 = (prompt('How much?'));
                let resultNum = parseInt(result2);
                totalFunds += resultNum;
          }
    }
}



let menu = new Menu
menu.start()

