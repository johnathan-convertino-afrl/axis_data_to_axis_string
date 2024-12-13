# AXIS DATA TO AXIS STRING
### Converts incoming axis bus ASCII output.

![image](docs/manual/img/AFRL.png)

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

### DOCUMENTATION
  For detailed usage information, please navigate to one of the following sources. They are the same, just in a different format.

  - [axis_data_to_axis_string.pdf](docs/manual/axis_data_to_axis_string.pdf)
  - [github page](https://johnathan-convertino-afrl.github.io/axis_data_to_axis_string/)

### DEPENDENCIES
#### Build

  - AFRL:utility:helper:1.0.0
  
#### Simulation

  - AFRL:simulation:axis_stimulator
  - AFRL:simulation:clock_stimulator

### PARAMETERS

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
  
### FUSESOC

* fusesoc_info.core created.
* Simulation uses icarus to run data through the core. No verification of data.

#### Targets
* RUN WITH: (fusesoc run --target=sim VENDER:CORE:NAME:VERSION)
  - default (for IP integration builds)
  - sim
  - sim_8bit_count_data
  - sim_rand_ready_8bit_count_data
  - sim_cocotb
