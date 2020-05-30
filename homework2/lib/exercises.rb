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


 #**********************************************     6    **********************************************************

def say
    ->(str = nil) do # lambda with string is nil
        fullstr= []
        addAll = ->(nextStr = nil)do # if next string is nill
            return fullstr.join(' ') if nextStr.nil? 
            fullstr << nextStr #add string
            addAll
        end
        addAll[str] 
     end
end


  #**********************************************    7   **********************************************************

  class Array
    def interleave (*args)
      final = []
      min_length = [self.length, args.length].min  #find min length
      0.upto(min_length-1) do |i|
        final << self[i] << args[i] # add ony by one value in final
      end
      [*final, *self[min_length..self.length], *args[min_length..args.length]] # all values , first string , second string
    end
  end


     #**********************************************    8   **********************************************************

   
    def pokemon_sprites (val)
        require 'net/http'
        require 'json'
        
        url = 'https://pokeapi.co/api/v2/pokemon/' +  val + '/' #set url with args
        uri = URI(url)
        response = Net::HTTP.get(uri) #get response
        if response == "Not Found"      # apply condition for response found or not
            raise "API responded with 404"
        else
            JSON.parse(response)['sprites']
        end
    end

     #***************************************** THANK YOU  *************************************

     


