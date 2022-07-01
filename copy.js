let totalFunds = 0;



class Menu {
    constructor(bill = new Bills()){
        this.bill = bill;
        this.totalFunds = totalFunds;
    }
    start(){
        this.totalFunds = prompt(`What is your monthly income`);
        this.options();
    }
 
        
    options(){
        let response = this.mainMenu();
    while (response == 1 || 2 || 3 || 4) {
        switch (response) {
            case '1': this.typeMenu();
            break;
            case '2': this.bill.viewBills();
            break;
            case '3': this.bill.deleteBills();
            break;
            case '4': this.bill.totalAmount();
            break;
            default: alert('Invalid Request');
                    
            }
        
            response = this.mainMenu();
        }
    
    } 
    
    mainMenu(){
        return prompt(`
            1. Add monthly bills 
            2. View bills
            3. Delete bill
            4. Budget left
            `);
    }
    typeMenu(){ 
            let result = prompt(`
            Choose what type of bill it is
            1. Utilities and rent
            2. Transportation
            3. Groceries
            4. Entertainment 
            `)
            switch (result) {
                case '1': this.monthlyMenu();
                break;
                case '2': 
                break;
                case '3': 
                break;
                case '4': 
                break;
                default: alert('Invalid Request');
            }
           
        }
    monthlyMenu(){
        let result1 = prompt(`What is the name for this bill.`);
        let result2 = prompt('Bill amount');
        this.bill.utilitiesRent.title.push(result1);
        this.bill.utilitiesRent.amount.push(Number(result2));
    }


}


class Bills{
    constructor(title , amount) {
        this.utilitiesRent = {
            title: '',
            amount: NaN
        } 
        this.transportation = {
            title: '',
            amount: NaN
        }
        this.groceries = {
            title: '',
            amount: NaN
        } 
        this.entertainment = {
            title: '',
            amount: NaN
        }
      this.billsTotal = 0; 
    } 
    viewBills() {
        this.displayer(billsName, billsAmount)
    }
    displayer(arrayName, arrayAmount) {
        let billString = ''
        
        for (let i = 0; i < this.arrayName.length; i++) {
            billString += i + '. Name: '  + this.arrayName[i] + ' Amount: ' + this.arrayAmount[i] + '\n' + '----------------------------' + '\n';

        }
        alert(billString + '\n' + 'Total: ' + this.total());
    }

    total() {
        this.billsTotal = 0
        for (let i = 0; i < this.billsAmount.length; i++){
            this.billsTotal += this.billsAmount[i];
        }
        return this.billsTotal;
    }
    deleteBills() {
        let billString = ''
        
        for (let i = 0; i < this.billsName.length; i++) {
            billString += i + '. Name: '  + this.billsName[i] + ' Amount: ' + this.billsAmount[i] + '\n' + '----------------------------' + '\n';

        }
    let deleteChoice = prompt('Choose which number to delete \n' + billString)
        if (deleteChoice <= this.billsName.length && deleteChoice >= 0) {
            this.billsName.splice(deleteChoice, 1)
            this.billsAmount.splice(deleteChoice, 1)
        } else {
            alert('Invalid Choice! Please select an existing number!')
        }

    } 

}



let menu = new Menu
menu.start()
