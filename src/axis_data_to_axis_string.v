//******************************************************************************
// file:    axis_data_to_axis_string.v
//
// author:  JAY CONVERTINO
//
// date:    2022/09/19
//
// about:   Brief
// Parse raw binary data into ASCII string output.
//
// license: License MIT
// Copyright 2022 Jay Convertino
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.
//
//******************************************************************************

`timescale 1ns/100ps

/*
 * Module: axis_data_to_axis_string
 *
 * Parse raw binary data into ASCII string output.
 *
 * Parameters:
 *
 *   DELIMITER   - break value between multple strings
 *   TERMINATION - termination value of full string from serial port, byte only. (\n = 0A \r = 0D).
 *   SBUS_WIDTH  - bus width of slave (data) input
 *   USER_WIDTH  - user width of slave bus, only in 4 bit nibbles, and at least 4 bits.
 *   DEST_WIDTH  - dest width of slave bus, only in 4 bit nibbles, and at least 4 bits.
 *   PREFIX_LEN  - length of following prefix strings.
 *   DATA_PREFIX - prefix for data hex strings
 *   DEST_PREFIX - prefix for destination hex strings
 *   USER_PREFIX - prefix for user hex strings
 *
 * Ports:
 *
 *   aclk           - Clock for AXIS
 *   arstn          - Negative reset for AXIS
 *   s_axis_tdata   - Input data
 *   s_axis_tvalid  - When set active high the input data is valid
 *   s_axis_tuser   - User data to convert.
 *   s_axis_tdest   - Destination data to convert
 *   s_axis_tready  - When active high the device is ready for input data.
 *   m_axis_tdata   - Output data
 *   m_axis_tvalid  - When active high the output data is valid
 *   m_axis_tready  - When set active high the output device is ready for data.
 *
 */
module axis_data_to_axis_string #(
    parameter DELIMITER   = ";",
    parameter TERMINATION = "\n",
    parameter SBUS_WIDTH  = 1,
    parameter USER_WIDTH  = 4,
    parameter DEST_WIDTH  = 4,
    parameter PREFIX_LEN  = 1,
    parameter DATA_PREFIX = "#",
    parameter DEST_PREFIX = "&",
    parameter USER_PREFIX = "*"
  )
  (
    input                         aclk,
    input                         arstn,
    input   [(SBUS_WIDTH*8)-1:0]  s_axis_tdata,
    input                         s_axis_tvalid,
    input   [USER_WIDTH-1:0]      s_axis_tuser,
    input   [DEST_WIDTH-1:0]      s_axis_tdest,
    output                        s_axis_tready,
    output  [7:0]                 m_axis_tdata,
    output                        m_axis_tvalid,
    input                         m_axis_tready
  );
  
  `include "util_helper_math.vh"
  
  // string length is the number of components plus 2 delimiters and termination(3)
  localparam STRING_LEN = SBUS_WIDTH*2+USER_WIDTH/4+DEST_WIDTH/4+PREFIX_LEN*3+3;
  
  reg [clogb2(STRING_LEN):0] counter;
  
  reg [STRING_LEN*8-1:0] char_buffer;
  
  integer index = 0;
  
  // var: s_axis_tready
  // ready if count is zero, this is a FWFT so no worries in pumping out data.
  assign s_axis_tready = ((counter == 0) ? 1 & arstn : 0);

  // var: m_axis_tdata
  // output whatever is in the character buffer.
  assign m_axis_tdata  = char_buffer[STRING_LEN*8-1 -:8];

  // var: m_axis_tvalid
  // Counter greater than 0? Valid output is available.
  assign m_axis_tvalid = (counter > 0 ? 1: 0);

  // process data
  always @(posedge aclk)
  begin
    if(arstn == 1'b0) begin
      counter <= 0;

      char_buffer <= 0;
    end else begin    
      if((counter > 0) && (m_axis_tready == 1'b1)) begin
        char_buffer <= {char_buffer[STRING_LEN*8-8-1:0], {8{1'b0}}};
        
        counter <= counter - 1;
      end
      
      // core will be ready when counter is 0
      if((s_axis_tvalid == 1'b1) && (counter == 0)) begin
        //for loop to unroll data into char buffer
        //insert data prefix into char buffer
        char_buffer[8*STRING_LEN-1 -:8*PREFIX_LEN] = DATA_PREFIX;
        
        for(index = STRING_LEN-PREFIX_LEN; index > STRING_LEN-PREFIX_LEN-2*SBUS_WIDTH; index = index - 1) begin
          char_buffer[8*index-1 -:8] <= s_axis_tdata[4*(index-(STRING_LEN-PREFIX_LEN-2*SBUS_WIDTH))-1 -:4] + (s_axis_tdata[4*(index-(STRING_LEN-PREFIX_LEN-2*SBUS_WIDTH))-1 -:4] < 10 ? 48 : 55);
        end
        
        char_buffer[8*(STRING_LEN-PREFIX_LEN-2*SBUS_WIDTH)-1 -:8] = DELIMITER;
        
        //for loop to unroll user into char buffer
        //insert user prefix into char buffer (deal with 0 = no user)
        char_buffer[8*(STRING_LEN-PREFIX_LEN-2*SBUS_WIDTH-1)-1 -:8*PREFIX_LEN] = USER_PREFIX;
        
        for(index = STRING_LEN-2*PREFIX_LEN-2*SBUS_WIDTH-1; index > STRING_LEN-2*PREFIX_LEN-2*SBUS_WIDTH-USER_WIDTH/4-1; index = index - 1) begin
          char_buffer[8*index-1 -:8] <= s_axis_tuser[4*(index-(STRING_LEN-2*PREFIX_LEN-2*SBUS_WIDTH-USER_WIDTH/4-1))-1 -:4] + (s_axis_tuser[4*(index-(STRING_LEN-2*PREFIX_LEN-2*SBUS_WIDTH-USER_WIDTH/4-1))-1 -:4] < 10 ? 48 : 55);
        end
        
        char_buffer[8*(STRING_LEN-2*PREFIX_LEN-2*SBUS_WIDTH-USER_WIDTH/4-1)-1 -:8] = DELIMITER;
        
        //for loop to unroll dest into char buffer
        //insert destprefix into char buffer (deal with 0 = no dest)
        char_buffer[8*(STRING_LEN-2*PREFIX_LEN-2*SBUS_WIDTH-USER_WIDTH/4-2)-1 -:8*PREFIX_LEN] = DEST_PREFIX;
        
        for(index = STRING_LEN-3*PREFIX_LEN-2*SBUS_WIDTH-USER_WIDTH/4-2; index > STRING_LEN-3*PREFIX_LEN-2*SBUS_WIDTH-USER_WIDTH/4-DEST_WIDTH/4-2; index = index - 1) begin
          char_buffer[8*index-1 -:8] <= s_axis_tdest[4*(index-(STRING_LEN-3*PREFIX_LEN-2*SBUS_WIDTH-USER_WIDTH/4-DEST_WIDTH/4-2))-1 -:4] + (s_axis_tdest[4*(index-(STRING_LEN-3*PREFIX_LEN-2*SBUS_WIDTH-USER_WIDTH/4-DEST_WIDTH/4-2))-1 -:4] < 10 ? 48 : 55);
        end
        
        char_buffer[0 +:8] <= TERMINATION;
        
        counter <= STRING_LEN;
      end
    end
  end
endmodule
