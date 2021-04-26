import Firebase from './firebase';

class FeedFunctions extends Firebase {
    searchUser(query, component){
        const search_results = []
        if (query == ""){
            component.setState({ search_results })
            return
        }

        this.readDatabase("/", "value", (users) => {
            users.forEach( user => {
                const {first, last} = user.val().name
                const username = `${first} ${last}`

                if (username.toLowerCase().startsWith(query.toLowerCase())){
                    const toAdd = {
                        uid: user.key,
                        name: username,
                        profile_pic: user.val().profile_pic
                    }
                    search_results.push(toAdd)
                }
                component.setState({ search_results })
            })
        })
    }
    fetchFeed(component){
        const getFollowingTimelines = (uid) => {
            this.readDatabase(`${uid}/following`, "value", (users) => {
                users.forEach(user => getTimeline(user.key))
            })
        }

        const getTimeline = (uid) => {
            this.readDatabase(uid, "value", user => {
                const {posts, name, profile_pic} = user.val()
                const feed = component.state.feed.slice()
                for (var pid in posts){
                    feed.push({
                        profile_pic,
                        name,
                        info: posts[pid]
                    })
                }
                
                feed.sort((a, b) => {
                    return b.info.timestamp - a.info.timestamp
                })

                component.setState({ feed })
            })
        }

        this.onUserActive(getFollowingTimelines);
    }
}

const feedFunctions = new FeedFunctions();
export default feedFunctions;