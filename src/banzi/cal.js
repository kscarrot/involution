const gcd = (a, b) => (a % b === 0 ? b : gcd(a, a % b))

const lcm = (a, b) => (a * b) / gcd(a, b)
