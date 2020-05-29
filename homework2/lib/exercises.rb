
#**********************************************    1    **********************************************************
def change(amount)
    raise RangeError if amount < 0 #check minus values
    cents = []
    [25, 10, 5, 1].each do |cent|   
    cents << amount / cent  #devide each cent value to amount
    amount %= cent  # perform module 
    end
    cents
 end

 #**********************************************    2    **********************************************************
 class String
    def stretched
        finalstring = ""
        if  self.delete('') #remove white space
            self.gsub(/\s/,'').split('').each_with_index do |char, index| # find index and char
            finalstring += ( char * ( index +1))
            end   
        end
        finalstring 
    end
end

 #**********************************************    3    **********************************************************

 def scramble(x)
    str = x.split('')
    count = str.length
    final = str.sample(count).join
    final
end

 #**********************************************    4    **********************************************************

 def powers(value , maxLen)
    i=1
    while i <= maxLen  do
        yield i      #  print i
       i = i*value   # perform power to i  value
   end
end


 #**********************************************    5   **********************************************************

 def powers_generator(value , maxLen)
    i=1
    p = Fiber.new do
        while i <= maxLen
            Fiber.yield i
            i = i*value
        end
     end
end


 #**********************************************     6  **********************************************************




  #**********************************************    7   **********************************************************


  class Array
    def interleave (*args)

     # output = self.zip(args).flatten.compact
     # output
    end
    self.interleave(*args)
  end
  
#['a', 'b'].interleave(1, 2, true, nil)


   
