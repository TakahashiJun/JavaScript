class ScrollSpy {
    constructor(rootSelector, rootMargin, targetClass, navSelector, addActiveClass, linkName) {
        //監視対象の要素を取得
        this._rootSelector = rootSelector;
        this._rootMargin = rootMargin;
        this._targets = document.querySelectorAll(`.${targetClass}`);
        this._navSelector = navSelector;
        this._addActiveClass = addActiveClass;
        this._linkName = linkName;
    }

    //オブザーバーを生成
    CreateObserver() {
        const observer = new IntersectionObserver(this.CallBack, this.CreateOptions());
        //それぞれの監視対象の要素を observe() に指定して監視
        this._targets.forEach( (target) => {
            observer.observe(target);
        });
    }
    //オプション
    CreateOptions() {
        return {
            root: this._rootSelector === null ? null : document.querySelector(this._rootSelector),
            rootMargin: this._rootMargin,
            //デフォルトなので省略可能
            threshold: 0
        }
    }
    CallBack = (entries) => {
        // 交差を検知をしたら
        entries.forEach(entry => {
        //監視対象の要素が領域（境界）と交差していれば（isIntersecting が true の場合）
            if (entry.isIntersecting) {
                //その要素を引数として以下の関数を呼び出してメニューをハイライト
                this.ChangeHightLight(entry.target);
            }
        });
    }
    //メニュー項目をハイライトする（色を変える）関数
    ChangeHightLight(target) {
        //現在アクティブになっている（active クラスが付与されている）メニューの要素を取得
        const highlightedMenu = document.querySelector(this._navSelector + ' ' + '.' + this._addActiveClass);
        //上記で取得した要素が存在すれば、その要素から active クラスを削除
        if (highlightedMenu !== null) {
            highlightedMenu.classList.remove(this._addActiveClass);
        }
        //引数で渡された現在交差している（isIntersecting が true の）要素の id 属性から値を生成
        const item = `#${this._linkName}${target.id}`;
        //上記で生成したリンク先を持つメニューが、現在交差している要素のリンク
        const currentActiveMenu =  document.querySelector(`${item}`);
        //現在交差している要素のリンクに active クラスを追加
        currentActiveMenu.classList.add(this._addActiveClass);
    }
}

//呼ぶ
//new ScrollSpy(null, '-25% 0px -75%','boxlist', '#navigation', "testtesttest", "link").CreateObserver();
