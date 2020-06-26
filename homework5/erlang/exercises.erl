
-module(strangeserver).
-export([start/0]).

start() ->
    receive
        {multiply,A,B,Pid} ->
            Pid ! A*B;

        {length, S,Pid} ->
            Pid ! length(S);

        _ -> 
            io:format("I don't understand~n",[])

        after 3100 ->
            io:format("I am bored~n",[])
    end,
start().
 
