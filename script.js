class Employee {
    constructor(name, grossSalary, deductions, benefits) {
        this.name = name;
        this.grossSalary = grossSalary;
        this.deductions = deductions;
        this.benefits = benefits;
    }

    calculateNetSalary() {
        return this.grossSalary - this.deductions + this.benefits;
    }
}

const employees = [];

function addEmployee() {
    const nameInput = document.getElementById('employee-name');
    const grossSalaryInput = document.getElementById('gross-salary');
    const deductionsInput = document.getElementById('deductions');
    const benefitsInput = document.getElementById('benefits');
    const outputDiv = document.getElementById('output');

    const name = nameInput.value.trim();
    const grossSalary = parseFloat(grossSalaryInput.value);
    const deductions = parseFloat(deductionsInput.value);
    const benefits = parseFloat(benefitsInput.value);

    if (!name || isNaN(grossSalary) || isNaN(deductions) || isNaN(benefits)) {
        outputDiv.textContent = 'Por favor, preencha todos os campos corretamente.';
        return;
    }

    const employee = new Employee(name, grossSalary, deductions, benefits);
    employees.push(employee);

    displayEmployees();
}

function displayEmployees() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    employees.forEach(employee => {
        const netSalary = employee.calculateNetSalary();
        outputDiv.innerHTML += `<p>Nome: ${employee.name}, Salário Líquido: ${netSalary}</p>`;
    });
}
