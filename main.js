
import { Metrobank, BDO, BPI } from './Bank.js'

class LoanCalculator {
    constructor(bankName, loanAmount, loanTerm) {
        this.bankName = bankName
        this.loanAmount = loanAmount
        this.loanTerm = loanTerm
    }

    getMonthlyInstallment() {
        const BankClasses = { 'metrobank': Metrobank, 'bdo': BDO, 'bpi': BPI }
        const instance = BankClasses[this.bankName.toLowerCase()]

        return new instance(this.loanAmount).getMonthlyInstallment(this.loanTerm)
    }
}

const bankNameArg = process.argv[2].split('=')[1]
const loanAmountArg = process.argv[3].split('=')[1]
const loanTermArg = process.argv[4].split('=')[1]


new LoanCalculator(bankNameArg, loanAmountArg, loanTermArg).getMonthlyInstallment()

