﻿NDSummary.OnToolTipsLoaded("SystemVerilogModule:axis_data_to_axis_string",{9:"<div class=\"NDToolTip TModule LSystemVerilog\"><div id=\"NDPrototype9\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/10/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/10/2\"><span class=\"SHKeyword\">module</span> axis_data_to_axis_string #(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">DELIMITER</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHString\">&quot;;&quot;</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">TERMINATION</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\"><span class=\"SHString\">&quot;\\n&quot;</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">SBUS_WIDTH</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"3/4/4/5\" data-NarrowGridArea=\"4/3/5/4\" style=\"grid-area:3/4/4/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"3/5/4/6\" data-NarrowGridArea=\"4/4/5/5\" style=\"grid-area:3/5/4/6\"><span class=\"SHNumber\">1</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"4/2/5/3\" data-NarrowGridArea=\"5/1/6/2\" style=\"grid-area:4/2/5/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"4/3/5/4\" data-NarrowGridArea=\"5/2/6/3\" style=\"grid-area:4/3/5/4\">USER_WIDTH</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"4/4/5/5\" data-NarrowGridArea=\"5/3/6/4\" style=\"grid-area:4/4/5/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"4/5/5/6\" data-NarrowGridArea=\"5/4/6/5\" style=\"grid-area:4/5/5/6\"><span class=\"SHNumber\">4</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"5/2/6/3\" data-NarrowGridArea=\"6/1/7/2\" style=\"grid-area:5/2/6/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"5/3/6/4\" data-NarrowGridArea=\"6/2/7/3\" style=\"grid-area:5/3/6/4\">DEST_WIDTH</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"5/4/6/5\" data-NarrowGridArea=\"6/3/7/4\" style=\"grid-area:5/4/6/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"5/5/6/6\" data-NarrowGridArea=\"6/4/7/5\" style=\"grid-area:5/5/6/6\"><span class=\"SHNumber\">4</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"6/2/7/3\" data-NarrowGridArea=\"7/1/8/2\" style=\"grid-area:6/2/7/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"6/3/7/4\" data-NarrowGridArea=\"7/2/8/3\" style=\"grid-area:6/3/7/4\">PREFIX_LEN</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"6/4/7/5\" data-NarrowGridArea=\"7/3/8/4\" style=\"grid-area:6/4/7/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"6/5/7/6\" data-NarrowGridArea=\"7/4/8/5\" style=\"grid-area:6/5/7/6\"><span class=\"SHNumber\">1</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"7/2/8/3\" data-NarrowGridArea=\"8/1/9/2\" style=\"grid-area:7/2/8/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"7/3/8/4\" data-NarrowGridArea=\"8/2/9/3\" style=\"grid-area:7/3/8/4\">DATA_PREFIX</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"7/4/8/5\" data-NarrowGridArea=\"8/3/9/4\" style=\"grid-area:7/4/8/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"7/5/8/6\" data-NarrowGridArea=\"8/4/9/5\" style=\"grid-area:7/5/8/6\"><span class=\"SHString\">&quot;#&quot;</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"8/2/9/3\" data-NarrowGridArea=\"9/1/10/2\" style=\"grid-area:8/2/9/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"8/3/9/4\" data-NarrowGridArea=\"9/2/10/3\" style=\"grid-area:8/3/9/4\">DEST_PREFIX</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"8/4/9/5\" data-NarrowGridArea=\"9/3/10/4\" style=\"grid-area:8/4/9/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"8/5/9/6\" data-NarrowGridArea=\"9/4/10/5\" style=\"grid-area:8/5/9/6\"><span class=\"SHString\">&quot;&amp;&quot;</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"9/2/10/3\" data-NarrowGridArea=\"10/1/11/2\" style=\"grid-area:9/2/10/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"9/3/10/4\" data-NarrowGridArea=\"10/2/11/3\" style=\"grid-area:9/3/10/4\">USER_PREFIX</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"9/4/10/5\" data-NarrowGridArea=\"10/3/11/4\" style=\"grid-area:9/4/10/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"9/5/10/6\" data-NarrowGridArea=\"10/4/11/5\" style=\"grid-area:9/5/10/6\"><span class=\"SHString\">&quot;*&quot;</span></div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"9/6/10/7\" data-NarrowGridArea=\"11/1/12/6\" style=\"grid-area:9/6/10/7\">) ( <span class=\"SHKeyword\">input</span> aclk, <span class=\"SHKeyword\">input</span> arstn, <span class=\"SHKeyword\">input</span> [(SBUS_WIDTH*<span class=\"SHNumber\">8</span>)<span class=\"SHNumber\">-1</span>:<span class=\"SHNumber\">0</span>] s_axis_tdata, <span class=\"SHKeyword\">input</span> s_axis_tvalid, <span class=\"SHKeyword\">input</span> [USER_WIDTH-<span class=\"SHNumber\">1</span>:<span class=\"SHNumber\">0</span>] s_axis_tuser, <span class=\"SHKeyword\">input</span> [DEST_WIDTH-<span class=\"SHNumber\">1</span>:<span class=\"SHNumber\">0</span>] s_axis_tdest, <span class=\"SHKeyword\">output</span> s_axis_tready, <span class=\"SHKeyword\">output</span> [<span class=\"SHNumber\">7</span>:<span class=\"SHNumber\">0</span>] m_axis_tdata, <span class=\"SHKeyword\">output</span> m_axis_tvalid, <span class=\"SHKeyword\">input</span> m_axis_tready )</div></div></div></div><div class=\"TTSummary\">Parse raw binary data into ASCII string output.</div></div>",11:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype11\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">assign</span> s_axis_tready = (</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">(counter == <span class=\"SHNumber\">0</span>) ? <span class=\"SHNumber\">1</span> &amp;&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">arstn</div><div class=\"PTypeNameSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">:&nbsp;</div><div class=\"PType InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHNumber\">0</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"1/6/2/7\" data-NarrowGridArea=\"3/1/4/6\" style=\"grid-area:1/6/2/7\">)</div></div></div></div><div class=\"TTSummary\">ready if count is zero, this is a FWFT so no worries in pumping out data.</div></div>",12:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype12\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">assign</span> m_axis_tdata = char_buffer[STRING_LEN*<span class=\"SHNumber\">8</span>-<span class=\"SHNumber\">1</span> -:<span class=\"SHNumber\">8</span>]</div></div><div class=\"TTSummary\">output whatever is in the character buffer.</div></div>",13:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype13\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">assign</span> m_axis_tvalid = (</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">counter &gt; <span class=\"SHNumber\">0</span> ?&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\"><span class=\"SHNumber\">1</span></div><div class=\"PTypeNameSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">:&nbsp;</div><div class=\"PType InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHNumber\">0</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"1/6/2/7\" data-NarrowGridArea=\"3/1/4/6\" style=\"grid-area:1/6/2/7\">)</div></div></div></div><div class=\"TTSummary\">Counter greater than 0? Valid output is available.</div></div>"});