
package rowsums
func sum(array []int,channelOdd chan<- int,channelEven chan<-int){
	sumAll := 0
	for _,arr := range array{ //{{3}, {5, -2}, {9, 1, 5}}
	sumAll += arr // {9+1+5=15}
	}
	if len(array)%2 == 0{
		channelEven <- sumAll //3
	}else{
		channelOdd <- sumAll //15+3 = 18
	}
}
func RowSums(arr [][]int)(int,int){
	channelEven := make(chan int)
	channelOdd := make(chan int)
	totalEvenNo := 0
	totalOddnNo := 0
	finalOdd := 0
	finalEven := 0
	for _,eachArr := range arr{//{{3}, {5, -2}, {9, 1, 5}}
		go sum(eachArr,channelOdd,channelEven)// function for each element sum
		if len(eachArr)%2 == 0{
			totalEvenNo++ //{5, -2}
		}else{
			totalOddnNo++  //{3},{9, 1, 5}
		}
	}
	for i:= 0; i < totalOddnNo;i++{ // odd value count and add
		finalOdd += <-channelOdd //channel send all odd value in finalOdd
	}
	for i:= 0; i < totalEvenNo;i++{ // even value count and add
		finalEven += <-channelEven////channel send all even value in finalEven
	}
	return finalEven,finalOdd
}
