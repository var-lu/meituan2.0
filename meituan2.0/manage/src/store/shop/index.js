const axios = require("axios")
const state = {
	shopTypeList: [],
	allShopTypeList: [],
	shopList: []
};
const mutations = {
	GET_SHOP_LOG(state, shopTypeList) {
		state.shopTypeList = shopTypeList;
	},
	SET_ALL_SHOP_TYPE_LIST(state, allShopTypeList) {
		state.allShopTypeList = allShopTypeList;
	}
};
const actions = {
	getShopTypeList({
		commit
	}, params) {
		axios.get("getShopType", {
			params
		}).then(data => {
			if(data.ok === 1) {
				commit("GET_SHOP_LOG", data.shopTypeList);
				commit("SET_PAGE_INFO", {
					pageIndex: data.pageIndex,
					pageSum: data.pageSum
				})
			}

		})
	},
	getAllShopTypeList(content) {
		axios.get("getAllShopTypeList")
			.then(data => {
				content.commit("SET_ALL_SHOP_TYPE_LIST", data.shopTypeList);
			})
	},
	deleteShopType(content, obj) {
		axios.delete("deleteShopType", {
			params: {
				id: obj.id
			}
		}).then(data => {
			if(data.ok === 1) {
				obj.that.$message.success("删除成功");
				if(obj.index < 1) {
					content.dispatch('getShopTypeList', content.rootState.pageInfo.pageIndex - 1);
				} else {
					content.dispatch('getShopTypeList', content.rootState.pageInfo.pageIndex);
				}
			} else {
				obj.that.$message.error("删除失败");
			}
		});
	},
	updateNoPic(content, obj) {
		axios.post("updateShopType", {
			shopType: obj.shopType,
			_id: obj._id
		}).then(data => {
			if(data.ok === 1) {
				obj.that.$message.success("修改成功");
				obj.that.form.shopType = "";
				if(obj.index < 1) {
					content.dispatch('getShopTypeList', content.rootState.pageInfo.pageIndex - 1);
				} else {
					content.dispatch('getShopTypeList', content.rootState.pageInfo.pageIndex);
				}
			} else {
				obj.that.$message.error("修改失败");
			}
		})
	},
	getShopList({
		commit
	}, params) {
		axios.get("getShop", {
			params
		}).then(data => {
			if(data.ok === 1) {
				commit("GET_SHOP_LOG", data.shopList);
				commit("SET_PAGE_INFO", {
					pageIndex: data.pageIndex,
					pageSum: data.pageSum
				})
			}

		})
	},
	deleteShop(content, obj) {
		axios.delete("deleteShop", {
			params: {
				id: obj.id
			}
		}).then(data => {
			if(data.ok === 1) {
				obj.that.$message.success("删除成功");
				if(obj.index < 1) {
					content.dispatch('getShopList', content.rootState.pageInfo.pageIndex - 1);
				} else {
					content.dispatch('getShopList', content.rootState.pageInfo.pageIndex);
				}
			} else {
				obj.that.$message.error("删除失败");
			}
		});
	},
}

export default {
	state,
	mutations,
	actions
}