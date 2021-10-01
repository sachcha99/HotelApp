
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';


import React from "react";

export const RoomDetails = () => {
  return (
    <div>
      <div className="detailList">
        <div className="roomReadMore">
          <div>
            <div className="repFeaTitle">ROOM DETAILS</div>

            <List component="nav" aria-label="main mailbox folders">

              <ListItemIcon>
                The large rooms are a luxurious retreat in the middle of the city,<br></br> with captivating views of Colombo’s vibrant streets.
              </ListItemIcon>

              <br />
              <div className="repFeaTitle">SIZE</div>
              <ListItemIcon>
                35 Sq Mt
              </ListItemIcon>

              <br />
              <div className="repFeaTitle">SIGNATURE FEATURE</div>
              <ListItemIcon>
                Theatre style and table set-up arrangements
              </ListItemIcon>

              <br />
              <div className="repFeaTitle">Occupancy Details</div>
              <ListItemIcon>
                Cushion chairs with choice of covers and bows
              </ListItemIcon>

            </List>
          </div>

          <div>

            <div className="repFeaTitle">BED & BATH</div>

            <List component="nav" aria-label="main mailbox folders">

              <ListItemIcon>
                Pillow menu
              </ListItemIcon>

              <br />

              <ListItemIcon>
                Suit, skirt & padded hangers
              </ListItemIcon>

              <br />
              <ListItemIcon>
                Bath menu & bath salts
              </ListItemIcon>

              <br />
              <ListItemIcon>
                Infant cribs for infants aged 0-2 years available on
              </ListItemIcon>

              <br />
              <ListItemIcon>
                request on complimentary basis
              </ListItemIcon>

              <br />
              <ListItemIcon>
                Rollaway or Extra Beds are available on additional
              </ListItemIcon>

              <br />
            </List>
          </div>

          <div>
            <div className="repFeaTitle">OTHER CONVENIENCES</div>

            <List component="nav" aria-label="main mailbox folders">

              <ListItemIcon>
                24-hour in-room dining Premium Wi-Fi at nominal charge
              </ListItemIcon>

              <br />

              <ListItemIcon>
                Premium Wi-Fi at nominal charge
              </ListItemIcon>

              <br />
              <ListItemIcon>
                DVD player DVDs on request
              </ListItemIcon>

              <br />
              <ListItemIcon>
                Complimentary newspapers
              </ListItemIcon>

              <br />
              <ListItemIcon>
                Cordless telephones with voicemail and data capabilities
              </ListItemIcon>

              <br />
              <ListItemIcon>
                32-inch flat-screen LCD TV
              </ListItemIcon>
              <br />

            </List>
          </div>
        </div>
      </div>
    </div>

  );
};