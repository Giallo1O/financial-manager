package it.glknet.financial_manager.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.glknet.financial_manager.model.Asset;

@Repository
public interface AssetRepository extends JpaRepository<Asset, String> {

	List<Asset> findByUserId(String userId);
	
	Optional<Asset> findByNameAndUserId(String name, String userId);
	
}
