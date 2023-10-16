export const SET_PLAYER = 'SET_PLAYER'
export const SET_IS_PLAYING = 'SET_IS_PLAYING'
export const SONG_PLAYING = 'SONG_IS_PLAYING'
export const CURRENT_TIME = 'CURRENT_TIME'
export const SONG_DURATION = 'SONG_DURATION'

// export const CURR_TIME = 'CURR_TIME'

const initialState = {
	isPlaying: false,
	songPlaying: null,
	player: null,
	currentTime: '-:--',
	songDuration: '--:--',

	// currTime: 0,
}

export function playerReducer(state = initialState, action) {
	switch (action.type) {
		case SET_PLAYER:
			return { ...state, player: action.player }
		case SET_IS_PLAYING:
			return { ...state, isPlaying: action.isPlaying }
		case SONG_PLAYING:
			return { ...state, songPlaying: action.songPlaying }
		case CURRENT_TIME:
			return { ...state, currentTime: action.currentTime }
		case SONG_DURATION:
			return { ...state, songDuration: action.songDuration }
		// case CURR_TIME:
		// 	return { ...state, currTime: action.currTime }
		default:
			return state
	}
}
