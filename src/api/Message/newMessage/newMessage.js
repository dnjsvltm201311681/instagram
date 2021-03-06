import { prisma } from "../../../../generated/prisma-client";

//메세지 Subscription
export default {
    Subscription: {
        newMessage: {
            subscribe: (_,args) => {
                const {roomId} = args;
                console.log(roomId);
                return prisma.$subscribe.message({
                    AND: [
                      {mutation_in: "CREATED"},
                      {node: {
                          room: {id: roomId}
                        }}
                    ]
                  }).node();
            },
            resolve: payload => payload
        }
    }
}