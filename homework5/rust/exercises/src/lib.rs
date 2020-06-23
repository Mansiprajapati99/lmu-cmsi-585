
pub fn change(amount: i64) -> Result<[i64;4], &'static str> {
    if amount < 0 {
        return Err("amount cannot be negative");
    }
        let quarter = amount / 25; 
        let rest25 = amount % 25;
        let dim = rest25 / 10;
        let rest10 = rest25 % 10;
        let nickel = rest10 / 5;
        let pennies = rest10 % 5;
        return Ok([quarter, dim, nickel, pennies]);
}

pub fn powers(base: u64, limit: u64) -> Vec<u64> {
    let mut result1 = Vec::new();
    let mut i =1;
    while i <= limit {
        result1.push(i);
        i = i*base;
    }
    result1
}

use std::f32::consts::PI;
pub struct Cylinder{
    radius : f32, 
    height : f32,
}
impl Cylinder {
   pub fn  surface_area(&self) -> f32  {
        2.0 * PI * self.radius * self.height + 2.0 * PI * self.radius * self.radius//2πrh+2πr2
    }
   pub fn  volume(&self) -> f32  {
        PI * self.radius * self.radius * self.height
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn change_works_for_negative() {
        assert_eq!(change(-2), Err("amount cannot be negative"));
        assert_eq!(change(-200000), Err("amount cannot be negative"));
    }

    #[test]
    fn change_works_for_zero() {
        assert_eq!(change(0), Ok([0, 0, 0, 0]));
    }

    #[test]
    fn change_works_for_positive_amounts() {
        assert_eq!(change(5), Ok([0, 0, 1, 0]));
        assert_eq!(change(25), Ok([1, 0, 0, 0]));
        assert_eq!(change(97), Ok([3, 2, 0, 2]));
        assert_eq!(change(1000000000), Ok([40000000, 0, 0, 0]));
    }

    #[test]
    fn powers_works() {
        assert_eq!(powers(2, 0), []);
        assert_eq!(powers(3, 1), [1]);
        assert_eq!(powers(2, 63), [1, 2, 4, 8, 16, 32]);
        assert_eq!(powers(2, 64), [1, 2, 4, 8, 16, 32, 64]);
    }

    #[test]
    fn cylinder_is_implemented_okay() {
        let c = Cylinder { radius: 3.0, height: 5.0 };
        assert_eq!(format!("{:.5}", c.surface_area()), "150.79645");
        assert_eq!(format!("{:.5}", c.volume()), "141.37167");
    }
}
