document.getElementById('math-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const problem = document.getElementById('problem').value;
    const solution = solveProblem(problem);
    document.getElementById('solution').innerHTML = solution;
});

function solveProblem(problem) {
    // Basic parser for linear equations of the form ax + b = c
    const match = problem.match(/(-?\d*)x\s*([-+]\s*\d+)\s*=\s*(-?\d+)/);
    if (match) {
        const a = parseFloat(match[1] || '1');
        const b = parseFloat(match[2].replace(/\s+/g, ''));
        const c = parseFloat(match[3]);
        const x = (c - b) / a;
        return `Solution: x = ${x}<br>Step-by-step:<br>
                1. Isolate x: ${a}x = ${c} - ${b}<br>
                2. Simplify: x = ${(c - b) / a}`;
    } else {
        return "Unable to solve the equation. Please enter a problem in the form 'ax + b = c'.";
    }
}
