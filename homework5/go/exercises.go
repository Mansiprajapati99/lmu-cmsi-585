
package rowsums
func sum(array []int,channelOdd chan<- int,channelEven chan<-int){
	sumAll := 0
	for _,arr := range array{ 
	sumAll += arr 
	}
	if len(array)%2 == 0{
		channelEven <- sumAll 
	}else{
		channelOdd <- sumAll 
	}
}
func RowSums(arr [][]int)(int,int){
	channelEven := make(chan int)
	channelOdd := make(chan int)
	totalEvenNo := 0
	totalOddnNo := 0
	finalOdd := 0
	finalEven := 0
	for _,eachArr := range arr{
		go sum(eachArr,channelOdd,channelEven)
		if len(eachArr)%2 == 0{
			totalEvenNo++ 
		}else{
			totalOddnNo++  
		}
	}
	for i:= 0; i < totalOddnNo;i++{ 
		finalOdd += <-channelOdd 
	}
	for i:= 0; i < totalEvenNo;i++{ 
		finalEven += <-channelEven
	}
	return finalEven,finalOdd
}
