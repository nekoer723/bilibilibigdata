package cn.huanzi.qch.baseadmin.echarts.rank.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/rank")
public class RankController {
    @GetMapping("view")
    public ModelAndView rank() {return new ModelAndView("echarts/rank/view");}
    @GetMapping("coin")
    public ModelAndView coin() {return new ModelAndView("echarts/rank/coin");}
    @GetMapping("danmu")
    public ModelAndView danmu() {return new ModelAndView("echarts/rank/danmu");}
    @GetMapping("favorite")
    public ModelAndView favorite() {return new ModelAndView("echarts/rank/favorite");}
    @GetMapping("like")
    public ModelAndView like() {return new ModelAndView("echarts/rank/like");}
    @GetMapping("reply")
    public ModelAndView reply() {return new ModelAndView("echarts/rank/reply");}
    @GetMapping("share")
    public ModelAndView share() {return new ModelAndView("echarts/rank/share");}
}
