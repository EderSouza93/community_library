import loansRepositories from "../repositories/loans.repositories.js";

async function createLoanService(userId, bookId, dueDate) {
  const createdLoan = await loansRepositories.createLoanRepository(
    userId,
    bookId,
    dueDate
  );
  if (!createdLoan) throw new Error("Error creating Loan");
  return createdLoan;
}

async function findAllLoansService() {
  const loans = await loansRepositories.findAllLoansRepository();
  return loans;
}

async function findLoaByIdService(loanId) {
  const loan = await loansRepositories.findLoanByIdRepository(loanId);
  if (!loan) throw new Error("Loan not found");
  return loan;
}

async function deleteLoanService(loanId, userId) {
  const loan = await loansRepositories.findLoanByIdRepository(loanId);
  if (!loan) throw new Error("Loan not found");
  if (loan.userId !== userId) throw new Error("Unauthorized");
  const response = await loansRepositories.deleteLoanRepository(loanId);
  return response;
}

export default {
  createLoanService,
  findAllLoansService,
  findLoaByIdService,
  deleteLoanService,
};
