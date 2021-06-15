class Bank {
    constructor(loanAmount, interestRate) {
        this.loanAmount = loanAmount
        this.interestRate = interestRate
    }

    getMonthlyInstallment(loanTerm) {
        const value = this.loanAmount * (1 + (loanTerm * (this.interestRate / 100))) / loanTerm

        console.log(`Monthly Installment: ${value}`)
    }
}

export class Metrobank extends Bank {
    constructor(loanAmount) {
        super(loanAmount, 1.5)
    }
}

export class BPI extends Bank {
    constructor(loanAmount) {
        super(loanAmount, 1.2)
    }
}

export class BDO extends Bank {
    constructor(loanAmount) {
        super(loanAmount, 1.7)
    }
}
