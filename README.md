# AXIS DATA TO AXIS STRING
## Converts incoming axis data to a string for ASCII output.
---

   author: Jay Convertino   
   
   date: 2023.01.01  
   
   details: Converts incoming axis data to axis string for ASCII output.  
   
   license: MIT   
   
---

![rtl_img](./rtl.png)

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
* in.bin
  
### fusesoc

* fusesoc_info.core created.
* Simulation uses icarus to run data through the core.
