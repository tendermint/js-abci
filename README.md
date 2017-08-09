# Instructions

First make sure that you have [tendermint core](https://github.com/tendermint/tendermint).

Then run `tendermint unsafe_reset_all` to reset the tendermint node. Make sure that you have backed up any relevant data in `~/.tendermint`.

From here start the abci app by switching into the example directory with `cd example` and running `npm start`.

Now start the tendermint node with `tendermint node`.

It this point you should be able to interact with your blockchain and its app. 

Go to `http://localhost:46657/` to see all available endpoints.
