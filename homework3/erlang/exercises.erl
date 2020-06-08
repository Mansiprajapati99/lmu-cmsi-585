
%---------------------------------------------------------------     1      ----------------------------------------------------------
-module (exercises).
-export([change/1]).
-export([sumOfCubesOfOdds/1]).
-export([powers/3]).


change(Args) ->

if 
    Args < 0 -> 
        %io:fwrite(False,"amount cannot be negative"); 
        {false,"amount cannot be negative"};
    true -> 
         Quarter = Args div 25,
         Rest25 = Args rem 25,
         Dim = Rest25 div 10,
         Rest10 = Rest25 rem 10,
         Nickel = Rest10 div 5,
         Pennies = Rest10 rem 5,
         {true,[Quarter,Dim,Nickel,Pennies]}
        
end.

%---------------------------------------------------------------     2     ----------------------------------------------------------
%this program i learnt from ashala as i got error in list implementation.
sumOfCubesOfOdds(Result) ->
    lists:sum([X*X*X || X <- Result, X rem 2 =/= 0]).

%---------------------------------------------------------------     3    ----------------------------------------------------------------

powers(Base, Limit, Pid) ->
    helper(Base, Limit, Pid, 1).   % Start the recursion with the power 1

helper(Base, Limit, Pid, Power) when Power =< Limit ->
    Pid ! Power ,  %  send Power to the process Pid 
    helper(Base, Limit, Pid, Power * Base);
    helper(_, _, _, _) ->
  ok.

%---------------------------------------------------------------     Thank you    ----------------------------------------------------------------









    

    

