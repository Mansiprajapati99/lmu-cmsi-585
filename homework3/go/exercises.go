
package exercises
import (
	"math"
	"errors"
)

func Change(arg int) ([]int,error) {
	
	if arg < 0 { //check minus condition
		//fmt.Println(nil,"amount cannot be negative")
		return []int{}, errors.New("amount cannot be negative")
	}
	totalcoins := []int{25,10,5,1}
	ans := []int{}
	for _, coin := range totalcoins { 
		ans = append(ans , arg/coin)
		arg %= coin 
	}
	return ans,nil // return two args6
 }

//*************************************************************      2       ***********************************************************************************

func Powers(value float64, maxlen float64, ch chan<- int) {
	
		for sum := 0.0; math.Pow(value , sum) <= maxlen; sum++ {
			ch <- int(math.Pow(value , sum)) //use Pow and send it ni to channel
			}
}

//*************************************************************      3      ***********************************************************************************

type Cylinder struct {
	radius, height float64
	}
func (c Cylinder) SurfaceArea() float64{
		return 2.0 * math.Pi * c.radius * c.height + 2.0 * math.Pi * c.radius * c.radius//2πrh+2πr2
	}
func (c Cylinder) Volume() float64{
		return math.Pi * c.radius * c.radius * c.height
	}
