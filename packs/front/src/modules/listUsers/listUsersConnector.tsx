import * as React from "react";
import { Card } from "antd";
import { withGetUsers, IWithListUsers } from "@board/cont";
import { Link } from "react-router-dom";

const { Meta } = Card;

class C extends React.PureComponent<IWithListUsers> {
  render() {
    const { listings, loading } = this.props;
    console.log("listings: ", listings)
    console.log("loading: ", loading)
    return (
      <div>
        {loading && <div>...loading</div>}
        {listings.map((l: any) => (
          <Card
            key={`${l.id}-card`}
            hoverable={true}
            style={{flex: 1, alignItems: "flex-end", width: 240, height:50, margin:5, border:2, borderColor: 'black', backgroundColor: "green" }}
            // cover={l.pictureUrl && <img alt="example" src={l.pictureUrl} />}
          >
            <Link to={`/listing/${l.id}`}>
              <Meta title={l.id} description={l.userId} />
            </Link>
          </Card>
        ))}
      </div>
    );
  }
}

export const ListUsersConnector = withGetUsers(C);