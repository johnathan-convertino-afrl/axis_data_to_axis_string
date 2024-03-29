# AXIS DATA TO AXIS STRING
### Converts incoming axis bus ASCII output.
---

   author: Jay Convertino   
   
   date: 2023.01.01  
   
   details: Converts incoming axis data/user/dest to axis string for ASCII output one character at a time.  
   
   license: MIT   
   
---

### Version
#### Current
  - V1.0.0 - initial release

#### Previous
  - none

### Dependencies
#### Build

  - AFRL:utility:helper:1.0.0
  
#### Simulation

  - AFRL:simulation:axis_stimulator
  - AFRL:simulation:clock_stimulator

### IP USAGE
#### INSTRUCTIONS

All data is converted to a string with prefixs for each of the 3 input ports.  
All strings are terminated with a single byte, and each has a delimiter between   
them. All output characters will be feed out from the buffer till it is exhausted.   
While the core is outputing data it will not be ready to take in any other data.  
There is no down clock cycle time between output and input, outside of the time  
to output the total amount in the buffer. Essentially no wasted cycles.  

#### PARAMETERS

* DELIMITER   : DEFAULT : ";"   : break value between multple strings  
* TERMINATION : DEFAULT : "\n"  : termination value of full string from serial port, byte only. (\n DEFAULT : 0A \r DEFAULT : 0D).  
* SBUS_WIDTH  : DEFAULT : 1     : bus width of master (data) output  
* USER_WIDTH  : DEFAULT : 4     : user width of master bus, only in 4 bit nibbles and at least 4 bits.  
* DEST_WIDTH  : DEFAULT : 4     : dest width of master bus, only in 4 bit nibbles and at least 4 bits.  
* PREFIX_LEN  : DEFAULT : 1     : length of following prefix strings.  
* DATA_PREFIX : DEFAULT : "#"   : prefix for data hex strings  
* DEST_PREFIX : DEFAULT : "&"   : prefix for destination hex strings  
* USER_PREFIX : DEFAULT : "*"   : prefix for user hex strings  

### COMPONENTS
#### SRC

* axis_data_to_axis_string.v
  
#### TB

* tb_axis.v
  
### fusesoc

* fusesoc_info.core created.
* Simulation uses icarus to run data through the core. No verification of data.

#### TARGETS
* RUN WITH: (fusesoc run --target=sim VENDER:CORE:NAME:VERSION)
  - default (for IP integration builds)
  - sim
  - sim_rand_data
  - sim_rand_ready_rand_data
  - sim_8bit_count_data
  - sim_rand_ready_8bit_count_data
