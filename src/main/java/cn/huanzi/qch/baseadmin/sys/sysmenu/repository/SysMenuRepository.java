package cn.huanzi.qch.baseadmin.sys.sysmenu.repository;

import cn.huanzi.qch.baseadmin.common.pojo.Result;
import cn.huanzi.qch.baseadmin.common.repository.*;
import cn.huanzi.qch.baseadmin.sys.sysmenu.pojo.SysMenu;
import cn.huanzi.qch.baseadmin.sys.sysmenu.vo.SysMenuVo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SysMenuRepository extends CommonRepository<SysMenu, String> {
    List<SysMenu> findAll();
}
